

const Banner = () => {
    return (
        <div className="hero mx-auto min-h-[100vh] lg:min-h-[87.7vh]" style={{ backgroundImage: 'url(https://i.ibb.co/XsN3k4y/banner-4.jpg)' }}>
            <div className="cover"></div>
            <div className="p-0 text-center text-neutral-content">
            <div className="w-[90vw] text-left text-white">
                    <div className="normal-case text-white py-4 px-4 text-6xl font-extrabold bg-black"><span className="text-yellow-300">Sports</span>shop</div>
                    <p className="mb-5 p-4 hero-overlay text-4xl">Sportswear or Fashion? <br /> Confused? <br /> What about try <span className="font-bold underline">Both?</span>.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;