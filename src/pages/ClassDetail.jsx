/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable indent */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import CardKelas from '../components/CardKelas';
import CardKelasDetail from '../components/CardKelasDetail';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { DetailContentImage } from '../assets';
import { connect } from 'react-redux';
import { getDetailClass, getClass } from '../redux/actions/class';
const { REACT_APP_URL: URL } = process.env;
const ClassDetail = (props) => {
  const { id } = useParams();
  const { detail } = props.classes;
  // const { data } = props.classes;
  console.log('detail data redux: ', detail);
  useEffect(() => {
    props.getDetailClass(id);
    props.getClass();
  }, []);
  const openNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
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
        <CardKelasDetail key={detail.id} name={detail.name} price={detail.price} img={detail.images === null || undefined ? DetailContentImage : `${detail.images}`} desc={detail.detail} onClick={() => openNewTab('https://forms.gle/8wycrHVmwZfSpgMx7')} />
        <h2 className="font-bold text-center text-2xl p-10 px-40">Kelas Lainnya</h2>
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 grid-rows-7 gap-y-24 px-8 2xl:px-28 ml-0 pb-20">
          {props.classes.data.map((dt) => {
            console.log('====================================');
            console.log(dt);
            console.log('====================================');
            return (
              <CardKelas key={dt.id} name={dt.name} desc={dt.description} to={`${dt.id}`} img={dt?.images === null || undefined ? ContentImage : `${URL}${dt.images}`} />
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
  getDetailClass,
  getClass
};
export default connect(mapStateToProps, mapDispatchToProps)(ClassDetail);
