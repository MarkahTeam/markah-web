/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { MarkahLogo } from '../assets';
import CardTutor from '../components/CardTutor';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <header className="px-0 sticky top-0 bg-white">
        <Navbar
          home="text-white"
          register="text-white"
          articles="text-white"
          aboutus="text-white font-bold"
          faq="text-white"
        />
      </header>
      <main>
        <section className="pt-6 pl-6 md:px-36 xl:px-96 bg-center xl:mx-40">
          <img src={MarkahLogo} />
        </section>
        <section className="p-20 text-justify text-xl font-medium tracking-wide">
          <p>Markah merupakan ruang aktivitas bagi pemula yang ingin mengenal lebih dekat dunia IT terutama pemrograman komputer.
            Markah mempunyai misi agar anak-anak muda Indonesia untuk lebih melek akan teknologi digital.
            Kelas Markah akan memberikan informasi seputar dunia IT dan mengadakan kelas pemrograman untuk pemula bisa belajar dari 0.
          </p>
        </section>
        <div className="w-full h-3 rounded-none bg-red-900"></div>
        <section className="p-10 bg-gray-900">
          <h1 className="text-2xl font-bold text-center tracking-wide text-white">OUR COUCHES</h1>
          <div className="grid lg:grid-cols-2 2xl:grid-cols-4 grid-rows-8 gap-y-24 md:px-28 place-items-center">
            <CardTutor name="M. Irfan Triananto" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas risus enim, eget euismod mauris rhoncus at. Quisque sit amet est imperdiet, bibendum metus eget, ullamcorper libero. Nulla facilisi." />
            <CardTutor name="Ahmad Ryadh" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas risus enim, eget euismod mauris rhoncus at. Quisque sit amet est imperdiet, bibendum metus eget, ullamcorper libero. Nulla facilisi." />
            <CardTutor name="Acmad Fadli Aditama" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas risus enim, eget euismod mauris rhoncus at. Quisque sit amet est imperdiet, bibendum metus eget, ullamcorper libero. Nulla facilisi." />
            <CardTutor name="Muhammad Abdi Priyangga" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas risus enim, eget euismod mauris rhoncus at. Quisque sit amet est imperdiet, bibendum metus eget, ullamcorper libero. Nulla facilisi." />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default About;
