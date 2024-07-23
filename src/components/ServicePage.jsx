import { useParams } from "react-router-dom";

const ServicePage = (props) => {
    const { id } = useParams();

    console.log(`id`, id);

    console.log(`props:`, props)
    return (
        <div className="font-[sans-serif] bg-gradient-to-r from-purple-800 to-indigo-800 py-12 px-4 w-full flex flex-col items-center justify-center" data-aos="fade-up">
            <div className="max-w-7xl mx-auto mx-10 w-3/4">
                <h2 className="text-white sm:text-4xl text-2xl font-bold text-center mb-16">What is {props.content[id].title} ?</h2>
                <p className="text-white">{props.content[id].content}</p>
            </div>
        </div>
    )
}

export default ServicePage
