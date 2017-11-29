/**
 * A HTTP plugin for Cordova / Phonegap
 */
package com.synconset;

import com.github.kevinsawicki.http.HttpRequest;
import com.github.kevinsawicki.http.HttpRequest.HttpRequestException;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.SocketTimeoutException;
import java.net.UnknownHostException;
import java.util.Map;

import javax.net.ssl.SSLHandshakeException;

public class CordovaHttpPostJson extends CordovaHttp implements Runnable {
    public CordovaHttpPostJson(String urlString, JSONObject jsonObject, Map<String, String> headers, CallbackContext callbackContext) {
        super(urlString, jsonObject, headers, callbackContext);
    }

    @Override
    public void run() {
        try {
            HttpRequest request = HttpRequest.post(this.getUrlString());
            this.setupSecurity(request);

            request.headers(this.getHeaders());
            request.acceptJson();
            request.contentType(HttpRequest.CONTENT_TYPE_JSON);
            request.send(getJsonObject().toString());
            int code = request.code();
            String body = request.body(CHARSET);


            JSONObject response = new JSONObject();
            response.put("status", code);
            if (code >= 200 && code < 300) {
                response.put("data", body);
                this.getCallbackContext().success(response);
            } else {
                response.put("error", body);
                this.getCallbackContext().error(response);
            }
        } catch (JSONException e) {
            this.respondWithError("There was an error generating the response");
        } catch (HttpRequestException e) {
            if (e.getCause() instanceof UnknownHostException) {
                this.respondWithError(0, "The host could not be resolved");
            } else if (e.getCause() instanceof SSLHandshakeException) {
                this.respondWithError("SSL handshake failed");
            } else if (e.getCause() instanceof SocketTimeoutException) {
                this.respondWithError("Timeout");
            } else {
                this.respondWithError("There was an error with the request");
            }
        }
    }
}
