export function notFound(req,res){res.status(404).json({message:`Route not found: ${req.method} ${req.originalUrl}`});}
export function errorHandler(error,_req,res,_next){
  const databaseErrors = new Set(['ECONNREFUSED', 'PROTOCOL_CONNECTION_LOST', 'ER_ACCESS_DENIED_ERROR', 'ER_BAD_DB_ERROR', 'ER_NO_SUCH_TABLE']);
  const isDatabaseError = databaseErrors.has(error.code);
  const status = error.status || (isDatabaseError ? 503 : 500);
  if (status === 500) console.error(error);
  const message = isDatabaseError
    ? 'The database is unavailable. Please try again shortly.'
    : (status === 500 ? 'Internal server error.' : (error.message || 'Request could not be completed.'));
  res.status(status).json({success:false,message});
}
