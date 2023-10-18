

const Banner = () => {
    return (
        <div className="hero mx-auto min-h-[100vh] lg:min-h-[87.7vh]" style={{ backgroundImage: 'url(https://i.ibb.co/1qhhNbT/banner3.jpg)' }}>
            <div className="cover"></div>
            <div className="p-0 text-center text-neutral-content">
            <div className="w-[90vw]">
                    <div className="normal-case text-white rounded-full py-4 px-4 text-xl font-extrabold bg-pink-700"><span className="text-yellow-300">Sports</span>shop</div>
                    <p className="mb-5 text-5xl">Sportswear or Fashion? <br /> Confused? <br /> What about try <br /> <span className="font-bold underline">Both.</span>.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;