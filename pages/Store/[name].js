import React from 'react'
import { useRouter } from 'next/router';

export default function store() {
    const Router = useRouter();
    const name = Router.query.name;

  return (
    <div>{name}</div>
  )
}
