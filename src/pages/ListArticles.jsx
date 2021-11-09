/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable indent */
import React, { useEffect } from 'react';
import CardListArticle from '../components/CardListArticle';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { getArticles } from '../redux/actions/article';
const { REACT_APP_URL: URL } = process.env;
import Swal from 'sweetalert2';

const ListArticles = (props) => {
  const { data } = props.article;
  console.log('data class redux: ', data);
  useEffect(() => {
    props.getArticles();
    console.log('data useEfect class: ', data);

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
          home="text-white"
          register="text-white"
          articles="text-white font-bold"
          aboutus="text-white"
          faq="text-white"
        />
      </header>
      <main className="p-10">
        <h1 className="text-center p-5 lg:px-20 py-12 font-bold text-3xl tracking-wider">Daftar Artikel</h1>
        <div className="grid place-items-center grid-cols-1 grid-rows-1 gap-y-14 lg:px-28 ml-0">
          {data.map((article) => {
            return (
              <CardListArticle key={article.id} name={article.name} img={`${URL}${article.images}`} desc={article.description} to={`article/${article.id}`} />
            );
          })}
        </div>
        <div className="my-10 flex justify-center items-center">
          <button className="focus:outline-none ml-28  text-white font-bold text-lg bg-red-900 px-16 py-4 rounded-lg lg:ml-9" onClick={loadMoreArticle}>LoadMore</button>
        </div>
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
  getArticles,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListArticles);
