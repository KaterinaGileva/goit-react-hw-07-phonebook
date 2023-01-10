import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


import Spinner from '../Spinner/Spinner';

export default function SharedLayout() {
  return (
    <>
      <div>
        <nav>
          <NavLink src="/">
            Phonebook
          </NavLink>
          <NavLink to="/newcontact">New Contact</NavLink>
        </nav>
      </div>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
}
