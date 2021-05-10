import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import DoctorListSearch from '../components/DoctorListSearch';
import OxygenSearch from '../components/Oxygen';
import AmbulanceSearch from '../components/Ambulance';
import NGOSearch from '../components/Ngo';
import BloodSearch from '../components/Blood';
import OtherRes from '../components/Other';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
    },
    {
      path: '/doctor',
      component: DoctorListSearch,
      name: 'doctor-list',
    },
    {
      path: '/oxygen',
      component: OxygenSearch,
      name: 'oxygen-list',
    },
    {
      path: '/ambulance-hospitals',
      component: AmbulanceSearch,
      name: 'ambulance-hospitals-list',
    },
    {
      path: '/ngos',
      component: NGOSearch,
      name: 'ngo-list',
    },
    {
      path: '/blood-plasma',
      component: BloodSearch,
      name: 'blood-list',
    },
    {
      path: '/other',
      component: OtherRes,
      name: 'other-list',
    },
  ],
  mode: 'history',
});

export default router;
