import React from 'react'
import img2 from '../assets/hero.png'

export default function Home() {
    return (
        <div>
            <div className="relative h-screen w-full">

                <img
                    src={img2}
                    alt="Hero"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <h1 className="text-white text-2xl md:text-4xl  font-serif font-bold text-center max-w-4xl px-4 leading-relaxed">
                        Discover the Leader Within You as You Navigate the Art of Diplomacy and the Power of Ideas.
                        At Our MUN, Delegates Don’t Just Debate — They Create Solutions, Build Friendships,
                        and Shape the Future of Tomorrow’s World.
                    </h1>
                </div>
            </div>
            <div>
                <section className="bg-white py-16 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6 tracking-wide">ABOUT MUN</h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            🌍 <span className="font-semibold text-gray-800">Step Into the World of Diplomacy and Leadership</span><br />
                            Welcome to <span className="font-bold text-blue-600">SVVVIMUN</span> – a platform where ideas transcend borders, voices inspire change,
                            and the leaders of tomorrow rise to shape a better world. Here, every debate sparks innovation,
                            every negotiation builds bridges, and every delegate becomes part of a global movement.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            📍 <span className="font-semibold text-gray-800">Indore, India | Shri Vaishnav Vidhyapeeth Vishwavidyalaya</span><br />
                            Set against the prestigious backdrop of SVVV, this <span className="text-blue-600 font-medium">3-day international conference</span>
                            brings together bright minds from across the globe. As a delegate, you won’t just represent nations –
                            you’ll redefine perspectives, craft solutions, and lead conversations that echo beyond committee walls.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">💡 Why SVVVIMUN?</h3>
                        <ul className="text-lg text-gray-600 space-y-3 mb-8">
                            <li>✔ Engage in intellectual debates on real-world issues</li>
                            <li>✔ Experience the thrill of diplomatic negotiations</li>
                            <li>✔ Network with visionaries and changemakers</li>
                            <li>✔ Unlock your potential to become a global leader</li>
                        </ul>

                        <p className="text-xl font-medium text-gray-800">
                            ⚡ The future of diplomacy begins <span className="text-blue-600 font-bold">here, with you.</span>
                            Are you ready to make history at <span className="font-bold text-blue-600">SVVVIMUN</span>?
                        </p>
                    </div>
                </section>
                <div className="flex flex-col items-center justify-center m-10 mt-10 gap-10 md:flex-row md:items-start">

                    <div className="bg-white shadow-2xl rounded-2xl p-10 w-full md:w-2/3 max-w-4xl mx-auto text-center md:text-left transition-all duration-300">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">📍 Location</h2>
                        <p className="text-gray-600 text-base mb-2">
                            Get directions to our event center
                        </p>

                        <div className="border-t border-gray-200 pt-3">
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">Address:</h3>
                            <p className="text-gray-700">
                                Indore-Ujjain Road, Gram Baroli, Indore <br />
                                Madhya Pradesh
                            </p>
                        </div>

                        <div className="border-t border-gray-200 pt-3 mt-3">
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">Phone:</h3>
                            <div className="space-y-1 text-gray-700">
                                <p>(+91)-701-14-33575</p>
                                <p>(+91)-992-60-68806</p>
                                <p>(+91)-982-60-32421</p>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-3 mt-3">
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">Email:</h3>
                            <p className="text-gray-700">imun@svvv.edu.in</p>
                        </div>
                    </div>



                    <div className="w-full md:w-2/3 flex justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.3998136856867!2d75.84705207568042!3d22.824692979312985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963039c587a8091%3A0x206d00d7a5e4afb3!2sShri%20Vaishnav%20Vidyapeeth%20Vishwavidyalaya%20(SVVV)!5e0!3m2!1sen!2sin!4v1755713879375!5m2!1sen!2sin"
                            width="100%"
                            height="465"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-xl shadow-lg max-w-[600px]"
                        ></iframe>
                    </div>
                </div>
            </div>
        

        </div>
    )
}
