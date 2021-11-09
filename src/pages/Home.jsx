/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */
import React, { useEffect } from 'react';
import { PromoImage, WhyImage } from '../assets';
import CardArtikel from '../components/CardArtikel';
import CardKelas from '../components/CardKelas';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { getClass } from '../redux/actions/class';
import { getArticles } from '../redux/actions/article';
const { REACT_APP_URL: URL } = process.env;
import { ContentImage } from '../assets';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const Home = (props) => {
  const { data } = props.classes;
  const { data: article } = props.article;
  console.log('data article redux: ', article);
  useEffect(() => {
    props.getClass();
    props.getArticles();

  }, []);
  const loadMore = () => {
    const { nextPage } = props.classes.pageInfo;
    if (nextPage !== null) {
      props.getClass(nextPage);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'no more class'
      });
    }
  };
  const loadMoreArticle = () => {
    const { nextPage } = props.article.pageInfo;
    if (nextPage !== null) {
      props.getArticles(nextPage);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'no more article'
      });
    }
  };
  return (
    <>
      <header className="px-0 top-0">
        <Navbar
          home="text-white font-bold"
          register="text-white"
          articles="text-white"
          aboutus="text-white"
          faq="text-white"
        />
      </header>
      <main>
        <section className="flex flex-col md:flex-row space-x-20">
          <div className="my-32 mx-24 space-y-8">
            <h2 className="text-3xl font-semibold">Kenapa harus belajar Programming ?</h2>
            <button onClick={() => window.location.replace('#why')} className="bg-red-800 text-white w-40 rounded-lg p-2">Mari kita cari tau</button>
          </div>
          <div className="md:my-8">
            <img src={PromoImage} />
          </div>
        </section>

        <section className="flex flex-col md:flex-row space-x-20" id="why">
          <div className="mx-10 lg:mx-10">
            <img src={WhyImage} />
          </div>
          <div className="my-20 leading-relaxed mx-28 space-y-8 w-1/2 text-justify">
            <h1 className="font-bold text-2xl">Why?</h1>
            <p className="text-xl font-regular tracking-wide">Simak dulu 3 alasan kenapa kamu harus belajar coding berikut ini:</p>
            <ol className="font-bold list-decimal px-10 text-lg">
              <li>Peluang Menjanjikan Di Masa Depan</li>
              <li>Mengembangkan Kreativitas</li>
              <li>Mengasah Kemampuan Problem Solving dan Logika
              </li>
            </ol>
          </div>
        </section>

        <section className="bg-gray-900 h-full py-10 w-full">
          <h1 className="text-white text-2xl text-center font-bold mb-16">Daftar Kelas</h1>
          <div className="grid justify-items-center lg:grid-cols-3 lg:grid-rows-7 gap-y-24 ml-0">
            {data.map((cl) => {
              return (
                <CardKelas key={cl.id} name={cl.name} desc={cl.description} to={`class/${cl.id}`} img={cl.images === null || undefined ? ContentImage : `${URL}${cl.images}`} />
              );
            })}

          </div>
          <div className="my-10 flex justify-center items-center">
            <button className="focus:outline-none ml-28  text-white font-bold text-lg bg-red-900 px-16 py-4 rounded-lg lg:ml-9" onClick={loadMore} >LoadMore</button>
          </div>
        </section>
        <section className="bg-white py-10 h-full w-full">
          <h1 className="text-2xl text-center font-bold mb-10">Artikel</h1>
          <div className="grid lg:grid-cols-3 lg:grid-rows-7 gap-x-10 gap-y-24 ml-0">
            {article.map((ar) => {
              return (
                <CardArtikel key={ar.id} name={ar.name} desc={ar.description} id={`article/${ar.id}`} img={`${URL}${ar.images}`} />
              );
            })}
          </div>
          <div className="my-10 flex justify-center items-center">
            <button className="focus:outline-none text-white font-bold text-lg bg-red-900 px-16 py-4 rounded-lg lg:ml-9" onClick={loadMoreArticle} >Load More</button>
          </div>
        </section>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </>
  );
};

const mapStateToProps = (state) => ({
  classes: state.classes,
  article: state.article,
});
const mapDispatchToProps = {
  getClass,
  getArticles
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
