type NoParameterApiHandler<R> = () => Promise<R>;
type NormalApiHandler<R, P> = (params: P) => Promise<R>;

export type ApiHandler<R = unknown, P = 'NO_PARAM'> = P extends 'NO_PARAM'
    ? NoParameterApiHandler<R>
    : NormalApiHandler<R, P>;
