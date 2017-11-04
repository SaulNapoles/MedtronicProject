CREATE TABLE [dbo].[Switch]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [nombre] VARCHAR(50) NULL, 
    [ip] VARCHAR(50) NULL, 
    [tipo] VARCHAR(50) NULL, 
    [activo] TINYINT NULL, 
    [descripcion] NVARCHAR(150) NULL, 
    [patchPanel] INT NULL, 
    CONSTRAINT [FK_Switch_PatchPanel] FOREIGN KEY ([patchPanel]) REFERENCES [dbo].[PatchPanel]([Id])
);