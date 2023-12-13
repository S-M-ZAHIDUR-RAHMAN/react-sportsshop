import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    return (

        <div className="hero h-[85vh] mb-96 lg:mb-0 md:mb-96 text-white">
            <div className="hero-content gap-4 lg:gap-60 md:gap-4 hero-overlay flex-col lg:flex-row-reverse">
                <img style={{borderRadius: '200px 0 0 200px'}} src="https://i.ibb.co/bLdpQwt/office.jpg" className="w-auto h-[80vh] rounded-lg shadow-2xl" />
                <div className="border border-white lg:ml-40">
                    <form className="flex flex-col gap-1 md:gap-5 p-4 rounded-lg"
                        action="https://formspree.io/f/moqogbnn"
                        method="POST"
                    >
                        <label>
                            <p>Your email address:</p>
                            <input className="text-black w-full pl-1" type="email" name="email"></input>
                        </label>
                        <label>
                            <p>Your message:</p>
                            <textarea className="text-black w-full h-auto pl-1" name="message"></textarea>
                        </label>
                        {/* <!-- your other form fields go here --> */}
                        <button type="submit" className="btn btn-xs lg:btn-ghost w-full h-full  text-white text-xs lg:text-lg hover:bg-slate-500 hover:text-black p-2 mt-3">
                            <div className="flex gap-2 p-2 ">
                                <p className="text-sm">SEND</p>
                                <p className=""><FaPaperPlane /></p>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Contact;