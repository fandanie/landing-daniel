export default function Head() {
    return (
        <>
            <title>Daniel Fandiño | Desarrollador Web</title>
            <meta name="description" content="Portafolio profesional de Daniel Fandiño" />
            <link rel="icon" href="/favicon.ico" />
        </>
    );
}


export const metadata = {
    title: "Daniel Fandiño | Desarrollador Web",
    description: "Soy desarrollador web con experiencia en Java, React, micro frontends y Spring Boot.",
    openGraph: {
        title: "Daniel Fandiño | Desarrollador Web",
        description: "Portafolio profesional con proyectos, habilidades y contacto.",
        url: "https://landing-daniel.vercel.app", // actualiza si tienes dominio propio
        siteName: "Daniel Fandiño",
        images: [
            {
                url: "/preview.png",
                width: 1200,
                height: 630,
                alt: "Daniel Fandiño | Desarrollador Web",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Daniel Fandiño | Desarrollador Web",
        description: "Portafolio profesional con proyectos, habilidades y contacto.",
        images: ["/preview.png"],
    },
};