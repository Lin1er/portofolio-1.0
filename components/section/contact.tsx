"use client";

export default function Contact() {
  return (
    <section className="bg-[#f2efef] h-full">
      <div className="container mx-auto p-20 bg-white text-black rounded-xl flex items-center justify-center h-full ">
        <div className="w-2/4 p-4 mr-3">
          <h1 className="text-4xl font-bold mb-4">
            Interested in collaborating or have any questions? Don't hesitate to
            contact me!
          </h1>
          <p className="text-xl">
            You can reach out via phone and email, or simply send an email
            through the provided form.
          </p>
          <div>
            <h2 className="text-2xl font-semibold mt-6">Phone</h2>
            <p className="text-lg">+62 821-1539-4126</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6">Email</h2>
            <p className="text-lg">m.ulinasidiki@gmail.com</p>
          </div>
        </div>
        <div className="w-2/4 border-2 p-5 rounded-lg border-gray-300 shadow-lg bg-[#c6baae]">
          <form
            className="flex flex-col"
            action="https://formspree.io/f/xdvzwkn"
            method="POST"
          >
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="block w-full px-3 py-2 mb-4 border border-gray-200 rounded-md bg-white"
              id="name"
              name="name"
              type="text"
              placeholder="Name here......."
              required
            />
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="block w-full px-3 py-2 mb-4 border border-gray-200 rounded-md bg-white"
              id="email"
              name="email"
              type="email"
              placeholder="Email here......."
              required
            />
            <label className="block mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="block w-full px-3 py-2 mb-4 border border-gray-200 rounded-md bg-white"
              id="message"
              name="message"
              placeholder="Your message here......."
              rows={5}
              required
            />
            <button
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
              type="submit"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
