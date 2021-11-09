/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable indent */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { PromoImage } from '../assets';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CardArtikel from '../components/CardArtikel';
import { connect } from 'react-redux';
import { getArticles, getDetailArticle } from '../redux/actions/article';
const { REACT_APP_URL: URL } = process.env;
import Swal from 'sweetalert2';

const ArticleDetail = (props) => {
  const { id } = useParams();
  const { detail } = props.article;
  const { data } = props.article;
  const dtNow = new Date(detail.created_at);
  const fixDate = `${dtNow.getDate()}-${dtNow.getMonth() + 1}-${dtNow.getFullYear()}`;
  useEffect(() => {
    props.getDetailArticle(id);
    props.getArticles();
  }, []);
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
      <header className="px-0 sticky top-0 bg-white">
        <Navbar
          home="text-white font-bold"
          register="text-white"
          articles="text-white"
          aboutus="text-white"
          faq="text-white"
        />
      </header>
      <main>
        <section className="flex flex-row py-10 space-x-80 justify-center">
          <div className="py-20 px-10">
            <h1 className="font-bold text-5xl tracking-widest">{detail.name}</h1>
            <div className="flex flex-row space-x-8 py-5">
              <p className="font-semibold text-md tracking-widest">Tanggal: {fixDate} </p>
              <p className="font-semibold text-md tracking-widest">Penulis: {detail.username} </p>
            </div>
          </div>
          <div className="w-96 h-60 ">
            <img
              className="w-60 h-60 rounded-md object-cover"
              src={detail.images === null || undefined ? PromoImage : `${detail.images}`}
              alt="article image"
            />
          </div>
        </section>
        <div className="w-full h-3 bg-gray-900"></div>
        <section>
          <p className="text-justify p-20 text-lg tracking-wide">
            {detail.detail}
          </p>
        </section>
        <section className="bg-gray-900 py-10 h-full w-full">
          <h1 className="text-2xl text-center text-white font-bold mb-10">Artikel</h1>
          <div className="grid grid-cols-3 grid-rows-7 gap-x-10 gap-y-24 px-28 ml-0">
            {data.map((ar) => {
              return (
                <CardArtikel key={ar.id} name={ar.name} desc={ar.description} id={`${ar.id}`} img={`${URL}${ar.images}`} onClick={() => window.location.replace(ar.id)} />
              );
            })}
          </div>
          <div className="my-10 flex justify-center items-center">
            <button className="focus:outline-none ml-28  text-white font-bold text-lg bg-red-900 px-16 py-4 rounded-lg lg:ml-9" onClick={loadMoreArticle} >LoadMore</button>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
const mapStateToProps = (state) => ({
  article: state.article,
});
const mapDispatchToProps = {
  getDetailArticle,
  getArticles
};
export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
