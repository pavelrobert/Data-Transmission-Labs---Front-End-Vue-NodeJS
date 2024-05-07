var app = new Vue({
    el: '#hamming-encoder',
    data: {
        dataBits: [],
        status: '',
        numberOfDataBits: 4
    },
    created: function () {
        this.initDataBits(4);
    },
    methods: {
        initDataBits: function(){
            this.dataBits=[];
            
            for(var i=0;i<this.numberOfDataBits;i++){
                var bit = { data: null };
                this.dataBits.push(bit);
            }
        },
        send: function () {
            if (this.validate(this.dataBits) === true){
                var encodedMessage = this.encode(this.dataBits);
                // this.status = encodedMessage + ' encoded sent to server';

                return axios.put("http://localhost:3000/message", {bits: encodedMessage}).then(
                    response => (this.status = response.data)
                );
            } else {
                this.status = 'Input is not valid. Please use 0 or 1 as data bit values';
            }
        },
        encode4: function(bits){
            var V4  = [null, null, null, parseInt(bits[0].data), null, parseInt(bits[1].data), parseInt(bits[2].data), parseInt(bits[3].data)];
            var c4_4biti = this.parity(V4[5] + V4[6] + V4[7]);
            var c2_4biti = this.parity(V4[3] + V4[6] + V4[7]);
            var c1_4biti = this.parity(V4[3] + V4[5] + V4[7]);
            console.log("Control bits: " + c1_4biti + "," + c2_4biti + "," + c4_4biti);
            return [c1_4biti, c2_4biti, parseInt(bits[0].data), c4_4biti, parseInt(bits[1].data), parseInt(bits[2].data), parseInt(bits[3].data)];
        },
        encode8: function(bits){
            var V = [null, null, null, parseInt(bits[0].data), null, parseInt(bits[1].data), parseInt(bits[2].data), parseInt(bits[3].data), null, parseInt(bits[4].data), parseInt(bits[5].data), parseInt(bits[6].data), parseInt(bits[7].data)];
            var c8_8biti = this.parity(V[9] + V[10] + V[11] + V[12]);
            var c4_8biti = this.parity(V[5] + V[6] + V[7] + V[12]);
            var c2_8biti = this.parity(V[3] + V[6] + V[7] + V[10] + V[11]);
            var c1_8biti = this.parity(V[3] + V[5] + V[7] + V[9] + V[11]);
            console.log("Control bits: " + c1_8biti + "," + c2_8biti + "," + c4_8biti + "," + c8_8biti);
            return [c1_8biti, c2_8biti, parseInt(bits[0].data), c4_8biti, parseInt(bits[1].data), parseInt(bits[2].data), parseInt(bits[3].data), c8_8biti, parseInt(bits[4].data), parseInt(bits[5].data), parseInt(bits[6].data), parseInt(bits[7].data)];
        },
        parity: function(number){
            return number % 2;
        },
        validate: function(bits){
            for(var i=0; i<bits.length;i++){
                if (this.validateBit(bits[i].data) === false)
                return false;
            }
            return true;
        },
        validateBit: function(character){
            if (character === null) return false;
            return (parseInt(character) === 0 ||
            parseInt(character) === 1);  
        }
    }
})