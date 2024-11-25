import { GoogleCloudStorageService } from '../projects/google-cloud-storage.service';
export declare class FilesService {
    private readonly googleCloudStorageService;
    constructor(googleCloudStorageService: GoogleCloudStorageService);
    uploadFile(file: Express.Multer.File): Promise<string>;
}
