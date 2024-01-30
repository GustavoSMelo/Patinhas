import pet01 from '../../public/images/pet01.jpg';
import pet02 from '../../public/images/pet02.jpg';
import pet03 from '../../public/images/pet03.jpeg';
import pet04 from '../../public/images/pet04.jpg';
import pet05 from '../../public/images/pet05.jpg';
import Portrait from './components/portrait';

const Home = () => {
    return (
        <main className="bg-slate-900 max-h-full text-white">
            <div className="pt-10 flex align-middle justify-center pb-12">
                <h1 className="text-6xl font-extrabold tracking-wider  font-breeSerif">Patinhas</h1>
            </div>

            <p className="text-center text-xl">Crie e compartilhe momentos unicos com seu pet</p>

            <div className='pb-6 px-7 mt-32 flex flex-row animate-home-slide'>
                <Portrait image={pet01.src} />
                <Portrait image={pet02.src} />
                <Portrait image={pet03.src} />
                <Portrait image={pet04.src} />
                <Portrait image={pet05.src} />
                <Portrait image={pet01.src} />
                <Portrait image={pet01.src} />
                <Portrait image={pet01.src} />
                <Portrait image={pet01.src} />
                <Portrait image={pet01.src} />
                <Portrait image={pet01.src} />
                <Portrait image={pet01.src} />
            </div>
        </main>
    );
};

export default Home;
