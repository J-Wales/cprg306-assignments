export default function Item(props) {
    return (
        <main>
            <div class="box-content h-16 w-60 p-4  
                    border-4 bg-green-500 m4"> 
                <p class="text-xl font-semibold">{props.name}</p>
                <p>Buy {props.quantity} in {props.category}</p>
            </div>  
        </main>
    );
}