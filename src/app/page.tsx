import { PiPawPrintFill } from 'react-icons/pi';

const Home = () => {
    return (
        <main>
            <h1 className="text-7xl mt-28 flex justify-center text-center text-amber-600 font-bold font-outline-2">
                <PiPawPrintFill />
                <p className='pl-5 pr-5'>
                    Create a document <br />
                    for your pet
                </p>
                <PiPawPrintFill />
            </h1>
            <p className='text-center mt-10 text-amber-600 font-extrabold'>Registry moments with your pet and store your picture here, and create a document to post in social medias :D</p>
            <section className='w-3/4 mx-32 mt-36 flex justify-center'>
                <figure className='ml-36 mr-14'>
                    <img src='/images/sundog-home.jpg' alt='sundog' />
                </figure>

                <div className='my-32 mr-32'>
                    <h1 className='text-center text-4xl mb-4'>Registry your best moments with your bestfriend</h1>

                    <p className='text-xl leading-loose text-center text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi dicta officiis, corrupti provident fuga iure beatae adipisci illum eveniet doloribus voluptates commodi animi deleniti enim voluptatum fugit quaerat dolorem?</p>
                </div>
            </section>

            <span className='flex justify-center flex-col align-middle items-center mt-16'>
                <figure className=' mb-20'>
                    <img src="/images/banner-horizontal.jpg" alt='banner' />
                </figure>

                <p className='w-2/4 text-center text-xl leading-loose text-gray-800'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, perferendis saepe. Tempora neque commodi officiis. Vel deserunt totam distinctio ex autem, beatae molestiae animi quaerat ad et perspiciatis deleniti temporibus.
                </p>
            </span>

            <article className='m-56 bg-amber-200 p-32 flex justify-center rounded-2xl border-black flex-col items-center border-2'>
                <h1 className='font-extrabold text-4xl'>{"It's free, and funny"}</h1>
                <p className='mt-16 text-xl text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, amet ipsa beatae illum enim similique? Vero quis rem fuga perspiciatis numquam harum velit nemo ipsam! Numquam recusandae debitis fuga tempore!</p>

                <button type='button' className='p-4 bg-orange-500 border-2 border-black rounded-full mt-28 w-96 cursor-pointer h-20'>Create your account</button>
            </article>
        </main>
    )
}


export default Home;
