import React from 'react';
import { TileLayer, Marker } from 'react-leaflet';
import { Icon, Point } from 'leaflet';
import * as S from './contacts-map.styled';
import iconSVG from '../../../assets/img/icon-location.svg';

const ICON_SIZE_X = 40;
const ICON_SIZE_Y = 50;
const ICON_ANCHOR_X = 25;
const ICON_ANCHOR_Y = 50;

type Props = {
  lat: number,
  lng: number,
  zoom: number,
};

function ContactsMap({ lat, lng, zoom }: Props): JSX.Element {
  const icon = new Icon({
    iconUrl: iconSVG,
    iconSize: new Point(ICON_SIZE_X, ICON_SIZE_Y),
    iconAnchor: new Point(ICON_ANCHOR_X, ICON_ANCHOR_Y),
    zoom: zoom,
  });

  return (
    <S.ContactsMap center={[lat, lng]} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={icon} position={[lat, lng]} />
    </S.ContactsMap>
  );
}

export default ContactsMap;
