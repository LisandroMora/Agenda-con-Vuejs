const app = new Vue({
    el: '#app',
    data: {
        contactos: [],
        NombreContacto: '',
        ApellidoContacto: '',
        TelefonoContacto: '',
        EditNombreContacto: '',
        EditApellidoContacto: '',
        EditTelefonoContacto: '',
        Indice: '',
        Validos: false
    },

    methods: {
        GuardarContacto: function(){
            this.ValidarGuardar();
            if(this.Validos == true){
                this.contactos.push({
                    Nombre: this.NombreContacto,
                    Apellido: this.ApellidoContacto,
                    Telefono: this.TelefonoContacto
                })
                this.Clear();
                localStorage.setItem('ListaContactos', JSON.stringify(this.contactos));
                document.elementFromPoint(10, 10).click();
            }
            
        },

        Clear: function () {
			this.NombreContacto = '';
			this.ApellidoContacto = '';
			this.TelefonoContacto = '';
			this.EditNombreContacto = '';
			this.EditApellidoContacto = '';
			this.EditTelefonoContacto = '';
		},

        
        EliminarContacto: function(index){
            this.contactos.splice(index,1);
            localStorage.setItem('ListaContactos', JSON.stringify(this.contactos));
            document.elementFromPoint(10, 10).click();
        },
        
        EditarContacto: function (index){
            this.EditNombreContacto = this.contactos[index].Nombre;
            this.EditApellidoContacto = this.contactos[index].Apellido;
            this.EditTelefonoContacto = this.contactos[index].Telefono;
            this.Indice = index;
        },

        GEditarContacto: function(){
            this.ValidarEditar()
            if(this.Validos == true){
                this.contactos[this.Indice].Nombre = this.EditNombreContacto;
                this.contactos[this.Indice].Apellido = this.EditApellidoContacto;
                this.contactos[this.Indice].Telefono = this.EditTelefonoContacto;
                this.Clear();
                localStorage.setItem('ListaContactos', JSON.stringify(this.contactos));
                document.elementFromPoint(10, 10).click();
            }
		},

        ValidarGuardar: function(){
            if(this.NombreContacto == '' || this.TelefonoContacto == '') this.Validos = false;
            else this.Validos = true; 
        },

        ValidarEditar: function(){
            if(this.EditNombreContacto == '' || this.EditTelefonoContacto == '') this.Validos = false;
            else this.Validos = true; 
        },

    },
    
    created() {
        let DatosLS = JSON.parse(localStorage.getItem('ListaContactos'));
        if(DatosLS !== null){
            this.contactos = DatosLS;
        }
    },
});