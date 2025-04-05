
import { LazyLoadImage } from 'react-lazy-load-image-component';


function CategoryItem({ url, Title,index }) {
    return (
        <div className="relative h-96 w-full bg-gray-100 overflow-hidden group">
            {/* Image with hover effect */}

            {
                index === (1 || 2) ? (

                    <img 
                    src={url} 
                    alt=" " 
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-150"
                    loading='eager' 
                />
                   
                ) : (

                    <LazyLoadImage 
                    src={url} 
                    alt=" " 
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-150"
                   
                    width="h-full"
                    height="w-full"
                     effect="blur"

                     wrapperProps={{
                        // If you need to, you can tweak the effect transition using the wrapper style.
                        style: {transitionDelay: "1s"},
                    }}

                />
                   
                )
            }
            <img 
                src={url}
                loading='eager' 
                alt=" " 
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-150"
            />
            
            {/* Title and Button */}
            <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-2xl  text-white font-bold">{Title}</h1>
                <button className="cursor-pointer bg-black text-white px-4 py-2 rounded-lg mt-2">Shop Now</button> 
            </div>
        </div>
    );
}

export default CategoryItem;
