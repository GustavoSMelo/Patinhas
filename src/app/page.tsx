import { PiPawPrintFill } from 'react-icons/pi';

const Home = () => {
    return (
        <main>
            <h1 className="text-7xl mt-28 flex justify-center text-center text-amber-600 font-bold font-outline-2">
                <PiPawPrintFill />
                <p className='pl-5 pr-5'>
                    Create a document <br />
                    for your cute pet
                </p>
                <PiPawPrintFill />
            </h1>

            <p className='text-center mt-10 text-amber-600 '>Registry moments with your pet and store your picture here, and create a document to post in social medias :D</p>


            <section className='w-3/4 mx-32 my-36 flex justify-center'>
                <figure className='ml-36 mr-14'>
                    <img src='/images/sundog-home.jpg' />
                </figure>

                <div className='my-32 mr-32'>
                    <h1 className='text-center text-4xl mb-4'>Registry your best moments with your bestfriend</h1>

                    <p className='text-xl leading-loose text-center text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi dicta officiis, corrupti provident fuga iure beatae adipisci illum eveniet doloribus voluptates commodi animi deleniti enim voluptatum fugit quaerat dolorem?</p>
                </div>
            </section>
        </main>
    )
}


export default Home;
