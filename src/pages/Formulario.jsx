const Formulario = () => {

   

    return (
        <div className="container-fluid">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Nome completo</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                
            </form>
            
        </div>
    );
}

export default Formulario