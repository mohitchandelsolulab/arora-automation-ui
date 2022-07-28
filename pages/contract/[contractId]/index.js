import { useRouter } from 'next/router';

import { Navigation } from '../../../components/Navigation';

import { FunctionInteract as FunctionInteract } from '../../../components/FunctionInteract';

export default function Contract({}) {
  const router = useRouter();
  const contractId = router.query.contractId;
  return (
    <>
      <Navigation active="2" />
      <h1>Contract {contractId} </h1>
      <FunctionInteract />
    </>
  );
}
