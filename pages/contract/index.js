import Link from 'next/link';

const ContractList = () => {
  return (
    <>
      <div>
        <h1>
          <Link href="/contract/1">
            <a>Contract 1</a>
          </Link>
        </h1>
        <h1>
          <Link href="/contract/2">
            <a>Contract 2</a>
          </Link>
        </h1>
      </div>
    </>
  );
};

export default ContractList;
