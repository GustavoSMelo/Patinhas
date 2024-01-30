import imagesPetsArray from "@catsProject/helper/homeSlideHelper";
import Portrait from "@catsProject/components/portrait";

const Home = () => {
    const renderSlideShow = () => {
        const slideLength = 12;
        const slides = [];

        for (let i = 0; i < slideLength; i++) {
            slides.push(imagesPetsArray[i].src);
        }

        return slides.map((imageSource) => (
            <Portrait image={imageSource} key={imageSource} />
        ));
    };

    return (
        <main className="bg-slate-900 max-h-full text-white">
            <div className="pt-10 flex align-middle justify-center pb-12">
                <h1 className="text-6xl font-extrabold tracking-wider  font-breeSerif">
                    Patinhas
                </h1>
            </div>

            <p className="text-center text-xl">
                Crie e compartilhe momentos unicos com seu pet
            </p>

            <div className="pb-6 px-7 mt-32 flex flex-row animate-home-slide">
                {renderSlideShow()}
            </div>

            <p className="text-center text-xl mt-32">
                Criamos uma foto polaroid digital do seu bixinho e voce pode
                compartilhar e baixar a foto para imprimir
                <br />
                Porem caso voce queira eternizar seu melhor amigo de forma
                digital, aqui voce pode criar um album de fotos digital
            </p>

            <p className="text-center text-xl mt-10">
                Para criarmos sua conta, nao pedimos informacoes sigilosas nem
                senha nem coisas parecidas, entao pode ficar tranquilo :D
            </p>

            <p className="text-center mt-24 font-medium cursor-pointer mb-6">
                Ficou interessado ? <button type="button" className="bg-yellow-300 text-black px-3 py-3 rounded-md">Crie sua conta</button>
            </p>


        </main>
    );
};

export default Home;
