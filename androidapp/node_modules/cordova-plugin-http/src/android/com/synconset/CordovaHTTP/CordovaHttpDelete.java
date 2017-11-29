/**
 * A HTTP plugin for Cordova / Phonegap
 */
package com.synconset;

import com.github.kevinsawicki.http.HttpRequest;
import com.github.kevinsawicki.http.HttpRequest.HttpRequestException;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.UnknownHostException;
import java.util.Map;

import javax.net.ssl.SSLHandshakeException;

public class CordovaHttpDelete extends CordovaHttp implements Runnable {
    public CordovaHttpDelete(String urlString, Map<?, ?> params, Map<String, String> headers, CallbackContext callbackContext) {
        super(urlString, params, headers, callbackContext);
    }
    
    @Override
    public void run() {
        try {
            HttpRequest request = HttpRequest.delete(this.getUrlString(), this.getParams(), false);
            this.setupSecurity(request);
            request.acceptCharset(CHARSET);
            request.headers(this.getHeaders());
            int code = request.code();
            String body = request.body(CHARSET);
            JSONObject response = new JSONObject();
            this.addResponseHeaders(request, response);
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
        }  catch (HttpRequestException e) {
            if (e.getCause() instanceof UnknownHostException) {
                this.respondWithError(0, "The host could not be resolved");
            } else if (e.getCause() instanceof SSLHandshakeException) {
                this.respondWithError("SSL handshake failed");
            } else {
                this.respondWithError("There was an error with the request");
            }
        }
    }
}
