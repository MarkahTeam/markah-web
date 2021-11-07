/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable indent */
import React, { useEffect } from 'react';
import CardListClass from '../components/CardListClass';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { getClass } from '../redux/actions/class';
const { REACT_APP_URL: URL } = process.env;
import { DetailContentImage } from '../assets';

const ListClass = (props) => {
  const { data } = props.classes;
  console.log('data class redux: ', data);
  useEffect(() => {
    props.getClass();
    console.log('data useEfect class: ', data);

  }, []);
  return (
    <>
      <header className="px-0 sticky top-0 bg-white">
        <Navbar
          home="text-white"
          register="text-white font-bold"
          articles="text-white"
          aboutus="text-white"
          faq="text-white"
        />
      </header>
      <main className="lg:p-10">
        <h1 className="text-center lg:p-5 lg:px-20 py-12 font-bold text-3xl tracking-wider">Daftar Kelas</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-7 gap-y-24 ml-0 pl-8 lg:pl-24 2xl:pl-72">
          {data.map((dt) => {
            return (
              <CardListClass key={dt.id} name={dt.name} desc={dt.description} to={`class/${dt.id}`} img={dt.images === null || undefined ? DetailContentImage : `${URL}${dt.images}`} />
            );
          })}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
const mapStateToProps = (state) => ({
  classes: state.classes,
});
const mapDispatchToProps = {
  getClass,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListClass);
