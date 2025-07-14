'use client';
import Head from 'next/head';
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaReact, FaJava, FaNodeJs, FaPhone } from "react-icons/fa";
import { SiSpringboot, SiNextdotjs, SiTailwindcss, SiPostgresql, SiDocker } from "react-icons/si";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useRef, useState } from 'react';


export default function Home() {

    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);


    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        setLoading(true)

        emailjs
            .sendForm(
                'service_h3reujx',      // Service ID
                'template_9bm10hg',     // Template ID
                form.current,
                'LfBchh2IORtkhrcL8'      // Public Key
            )
            .then(() => {
                    toast.success('✅ Mensaje enviado con éxito');
                    form.current?.reset();
                })
            .catch((error) => {
                    console.error('❌ Error al enviar el mensaje:', error);
                    toast.error('Hubo un error. Intenta más tarde.');
                })
            .finally(() => {
                setLoading(false);
                });
    };


    return (
        <>
            <Head>
                <title>Daniel Fandiño | Desarrollador Web</title>
                <meta name="description" content="Portafolio de Daniel Fandiño, desarrollador web con experiencia en React, Java, Spring Boot y micro frontends." />
                <meta property="og:title" content="Daniel Fandiño | Portafolio de Desarrollador Web" />
                <meta property="og:description" content="Conoce los proyectos de Daniel Fandiño, desarrollador web full stack con experiencia en tecnologías modernas." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="landing-daniel.vercel.app" />
                <meta property="og:image" content="landing-daniel.vercel.app/preview.png" />
            </Head>

            <main className="min-h-screen bg-gray-100 text-gray-900 font-sans">

                <header className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white shadow">
                    <div
                        className="max-w-5xl mx-auto px-4 py-6">
                        <h1 className="text-2xl font-bold text-white">Daniel Fandiño</h1>

                        <nav className="mt-4 flex gap-6">
                            <a href="#about" className="text-white-600 hover:text-blue-200">Sobre mí</a>
                            <a href="#projects" className="text-white-600 hover:text-blue-200">Proyectos</a>
                            <a href="#contact" className="text-white-600 hover:text-blue-200">Contacto</a>
                        </nav>

                    </div>
                </header>

                <section id="about" className="max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-6">
                    <img
                        src="/perfil.jpg"
                        alt="Daniel Fandiño"
                        className="w-40 h-40 rounded-full border-4 border-black-300 shadow-lg"
                    />
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}>
                        <h2 className="text-2xl font-semibold mb-2">Sobre mí</h2>
                        <p>
                            Full Stack Developer & Technical Support Engineer with 10+ years of experience in customer-facing technical roles supporting enterprise SaaS platforms, CRM systems, and web technologies.
                            <br />
                            Proficient in JavaScript, React, Python, Spring Boot, SQL, REST APIs, and support tools like Zendesk, Salesforce.
                            <br />
                            Combines technical troubleshooting with software development to deliver efficient solutions across both support and product teams.
                            <br />
                            Thrives in remote-first environments, with a passion for clean code, automation, documentation, and helping users and teams succeed.
                        </p>
                    </motion.div>
                </section>


                <section id="projects" className="max-w-5xl mx-auto px-4 py-16 bg-white">
                    <h2 className="text-2xl font-semibold mb-8">Proyectos</h2>
                    <motion.div className="grid md:grid-cols-2 gap-6">
                        {/* Proyecto 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}

                            className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-bold mb-2">CRM de Clientes</h3>
                            <p className="text-gray-700 mb-2">
                                Aplicación para gestión de clientes, tareas y notas con login y roles.
                            </p>
                            <p className="text-sm text-gray-500">Stack: React, Spring Boot, PostgreSQL</p>
                        </motion.div>

                        {/* Proyecto 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-bold mb-2">Marketplace</h3>
                            <p className="text-gray-700 mb-2">
                                E-commerce con productos, carrito, favoritos y autenticación.
                            </p>
                            <p className="text-sm text-gray-500">Stack: Next.js, Firebase, TailwindCSS</p>
                        </motion.div>

                        {/* Proyecto 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-bold mb-2">Dashboard de Métricas</h3>
                            <p className="text-gray-700 mb-2">
                                Panel administrativo con KPIs en tiempo real y gestión de usuarios.
                            </p>
                            <p className="text-sm text-gray-500">Stack: NestJS, React, Chart.js, Docker</p>
                        </motion.div>
                    </motion.div>
                </section>


                <section id="skills" className="max-w-5xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-semibold mb-8">Habilidades</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">

                        <motion.div
                            className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <FaReact className="mx-auto text-4xl text-blue-600 mb-2" />
                            <p className="text-sm font-medium">React</p>
                        </motion.div>

                        <motion.div
                            className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <FaJava className="mx-auto text-4xl text-blue-600 mb-2" />
                            <p className="text-sm font-medium">Java</p>
                        </motion.div>

                        <motion.div
                            className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <SiSpringboot className="mx-auto text-4xl text-blue-600 mb-2" />
                            <p className="text-sm font-medium">Spring Boot</p>
                        </motion.div>

                        <motion.div
                            className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <SiNextdotjs className="mx-auto text-4xl text-blue-600 mb-2" />
                            <p className="text-sm font-medium">Next.js</p>
                        </motion.div>

                        <motion.div
                            className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <FaNodeJs className="mx-auto text-4xl text-blue-600 mb-2" />
                            <p className="text-sm font-medium">Node.js</p>
                        </motion.div>

                        <motion.div
                            className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <SiTailwindcss className="mx-auto text-4xl text-blue-600 mb-2" />
                            <p className="text-sm font-medium">Tailwind</p>
                        </motion.div>

                        <motion.div
                            className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <SiPostgresql className="mx-auto text-4xl text-blue-600 mb-2" />
                            <p className="text-sm font-medium">PostgreSQL</p>
                        </motion.div>

                        <motion.div
                            className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <SiDocker className="mx-auto text-4xl text-blue-600 mb-2" />
                            <p className="text-sm font-medium">Docker</p>
                        </motion.div>

                    </div>
                </section>

                <section id="contact" className="max-w-5xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-semibold mb-8 text-center">Contáctame</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Info de contacto */}
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <FaEnvelope className="text-blue-600 text-xl" />
                                <p className="text-gray-800">daniel.fandino.baez@gmail.com</p>
                            </div>


                            <div className="flex items-center gap-4">
                                <FaLinkedin className="text-blue-600 text-xl" />
                                <a
                                    href="https://www.linkedin.com/in/daniel-fandiño-969229169"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    LinkedIn
                                </a>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <FaPhone className="text-blue-600 text-xl" />
                                <a
                                    href="tel:+573222373382"
                                    className="text-gray-800 hover:text-blue-600 transition"
                                >
                                    +57 322 237 3382
                                </a>
                            </div>
                        </motion.div>

                        {/* Formulario */}
                        <motion.form
                            ref={form}
                            onSubmit={sendEmail}
                            className="grid gap-4 bg-white p-6 rounded-lg shadow-md"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Tu nombre"
                                required
                                className="p-3 border border-gray-300 rounded"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Tu correo electrónico"
                                required
                                className="p-3 border border-gray-300 rounded"
                            />
                            <textarea
                                name="message"
                                placeholder="Tu mensaje"
                                required
                                className="p-3 border border-gray-300 rounded min-h-[120px]"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className={`flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded transition ${
                                    loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                                }`}
                            >
                                {loading ? (
                                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        ></path>
                                    </svg>
                                ) : (
                                    'Enviar mensaje'
                                )}
                            </button>

                        </motion.form>
                    </div>
                </section>

                <footer className="bg-gray-200 text-center py-4 mt-10">
                    <p>© 2025 Daniel Fandiño. Todos los derechos reservados.</p>
                </footer>
            </main>
        </>
    )
}
