export function tanganiError(error, req, res, next) {
    console.error(error);

    if (res.headersSent) return next(error);

    const status = Number.isInteger(error.status) ? error.status : 500;

    if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
         return res.status(400).json({
        success: false,
        error: {
            code: "INVALID_JSON",
            message: "Format JSON tidak valid."
        }
     });
    }

    res.status(status).json({
        success: false,
        error:{
            code: error.code || "INTERNAL_SERVER_ERROR",
            message: status === 500
            ? "Terjadi kesalahan pada server."
            : error.message
        }
    });
}