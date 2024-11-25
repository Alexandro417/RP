export declare class GoogleCloudStorageService {
    private storage;
    private bucketName;
    constructor();
    uploadFile(file: Express.Multer.File): Promise<string>;
}
