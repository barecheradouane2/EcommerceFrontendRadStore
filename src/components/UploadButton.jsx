import { Upload } from "lucide-react";

function UploadButton({children}) {
    return (
        <button className="bg-second-100 cursor-pointer  w-full p-2 rounded-lg text-black flex items-center justify-center gap-2">
                <Upload /> {children}
                </button>
    )
}

export default UploadButton
