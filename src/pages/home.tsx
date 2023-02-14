import styles from '../styles/Home.module.css';

export default function Home() {

    const callAPI = async () => {
        try{
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
            const data = await res.json();
            console.log(data)
        }catch(err){
            console.log(err)
        }
     };

    return (
        <div>
            <main>
                <button onClick={callAPI}>Make API call</button>
            </main>
        </div>
    );
}