import getConfig from 'next/config';


const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

console.log(serverRuntimeConfig.MY_SECRET);

console.log(publicRuntimeConfig.API_ENDPOINT);

export default function Gssp(props) {
    return (
        <div>
            API_ENDPOINT: {publicRuntimeConfig.API_ENDPOINT}
            MY_SECRET: {serverRuntimeConfig.MY_SECRET}
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </div>
    );
}

export const getServerSideProps = () => {
    return {
        props: {
            MY_SECRET: serverRuntimeConfig.MY_SECRET,
            API_ENDPOINT: publicRuntimeConfig.API_ENDPOINT,
        },
    };
};