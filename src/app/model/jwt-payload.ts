export interface JwtPayload {
    token: String;
    tokenType: String;
    expiryToken: number;
    status: number;
    message: String;
}
