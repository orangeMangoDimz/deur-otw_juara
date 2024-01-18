import React from 'react'

const data3 = [
    { id: 1, imgSrc: '/images/cover/cover5.png', title: 'ART DECO' },
    { id: 2, imgSrc: '/images/cover/cover6.png', title: 'INDUSTRIAL' },
    { id: 3, imgSrc: '/images/cover/cover7.png', title: 'ALL COLLECTION >' },
]

const DashboardImageCover3 = () => {
    const clickHandler = () => {
        window.location.href = "/room-style/modern";
    }
    return (
        <>
            <div onClick={clickHandler}
                className=" flex justify-center items-cente w-full"
                style={{ height: "400px" }}
            >
                {
                    data3.map(item => {
                        return (
                            <div key={item.id} className="w-1/3 h-full">
                                <div className="relative w-full h-full">
                                    <div
                                        className=" absolute block w-full h-full z-10"
                                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                                    ></div>
                                    <img
                                        src={item.imgSrc}
                                        alt="cover"
                                        className="absolute h-full w-full object-cover"
                                    />
                                    <div className="absolute w-full h-full flex justify-center items-center flex-col">
                                        <h1
                                            className=" text-white tracking-widest font-bold text-3xl"
                                            style={{ zIndex: 20 }}
                                        >
                                            {item.title}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default DashboardImageCover3;