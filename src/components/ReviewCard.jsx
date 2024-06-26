import { star } from "../assets/icons"

const ReviewCard = ({ customerName, imgURL, rating, feedback }) => {
    return (
        <section className="flex justify-center items-center flex-col">
            
            <img 
                src={imgURL} 
                alt="customer"
                className="rounded-full object-cover w-[120px] h-[120px]" 
            />
            <p className="mt-6 info-text max-w-sm text-center">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img 
                    src={star} 
                    alt="rating"
                    width={24}
                    height={24}
                    className="object-contain"
                />
                <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
        </section>
    )
}

export default ReviewCard