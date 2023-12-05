import "./gifshot";
import "./libheif";
declare function heic2any({ blob, toType, quality, gifInterval, multiple, buffer }: {
    blob?: Blob;
    multiple?: true;
    toType?: string;
    quality?: number;
    gifInterval?: number;
    buffer?: ArrayBuffer;
}): Promise<Blob | Blob[]>;
export default heic2any;
