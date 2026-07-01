import React from 'react'

const services = [
  {
    title: "Backend Development",
    desc: "Build scalable and secure backend applications using modern technologies.",
  },
  {
    title: "REST API",
    desc: "Create fast APIs for web and mobile applications.",
  },
  {
    title: "Database",
    desc: "Store and manage your data efficiently with SQL and NoSQL databases.",
  },
  {
    title: "Authentication",
    desc: "Secure your users with JWT Authentication and Authorization.",
  },
  {
    title: "Deployment",
    desc: "Deploy your projects quickly on modern cloud platforms.",
  },
  {
    title: "Performance",
    desc: "Optimize backend performance for maximum speed and reliability.",
  },
];

function Main() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 text-white py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full">
              Modern Backend Platform
            </span>

            <h1 className="text-6xl font-bold leading-tight mt-8">
              Build Powerful
              <span className="text-cyan-400"> Backend </span>
              Applications
            </h1>

            <p className="text-gray-400 mt-8 text-lg leading-8">
              Create scalable, secure and high-performance backend systems for
              modern web applications.
            </p>

            <div className="flex gap-5 mt-10">
              <button className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-xl duration-300">
                Get Started
              </button>

              <button className="border border-cyan-500 px-7 py-3 rounded-xl hover:bg-cyan-500 duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-cyan-500 w-[420px] h-[420px] rounded-full blur-3xl opacity-20 absolute"></div>

            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
              alt="Backend"
              className="rounded-3xl relative shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white">
              Our Services
            </h2>

            <p className="text-gray-400 mt-5">
              Everything you need to build a modern backend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 hover:-translate-y-3 duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>

                <h3 className="text-white text-2xl font-semibold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.desc}
                </p>

                <button className="mt-7 text-cyan-400 hover:text-white duration-300">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;