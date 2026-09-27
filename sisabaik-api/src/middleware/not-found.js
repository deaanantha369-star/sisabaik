export function routeTidakDitemukan(req, res) {
    res.status(404).json({
        succes:false,
        error:{
            code: "ROUTE_NOT_FOUND",
            message: 'Route${req.method} ${req.originalURL} tidak ditemukan.'
        }
    });
}