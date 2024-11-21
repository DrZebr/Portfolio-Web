import { Metadata } from 'next';

import CenterBox from '@/components/centerBox';

import Headerbox from "@/components/header";

export const metadata: Metadata = {

  title: 'dad'

}

export default function Index() {

  return (
    <div>

      <CenterBox />

      <Headerbox />

    </div>
  )

} 