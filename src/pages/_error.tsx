import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CustomError = ({ statusCode }: { statusCode: number }) => {
  const router = useRouter();

  useEffect(() => {
    console.log("status code ", statusCode)
    if (statusCode === 404) {
      router.replace('/404');
    }
  }, [statusCode, router]);

  return (
    <div>
      <h1>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</h1>
    </div>
  );
};

export default CustomError;