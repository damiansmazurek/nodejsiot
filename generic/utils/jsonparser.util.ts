export class JSONParser {
    static parseJsonFormat(json: any): any[] {
        var stringConstructor = "test".constructor;
        var arrayConstructor = [].constructor;
        var objectConstructor = {}.constructor;
        if (json.constructor === stringConstructor) {
            return this.parseStringJSON(json, []);
        }
        else if (json.constructor === arrayConstructor) {
            return json;
        }
        else if (json.constructor === objectConstructor) {
            var message = [json]
            return message;
        }
    }
    private static parseStringJSON(json: string, jsonArray: any[]): any[] {
        let jsonLevel = 0;
        let startedReading = false;
        let startPossition = 0;
        let length = 0;
        for (var i = 0; i < json.length; i++) {
            let item = json[i];
            length++;
            switch (item) {
                case '{':
                    jsonLevel++;
                    if(!startedReading){
                        startPossition = i;
                    }
                    startedReading = true;
                    break;
                case '}':
                    jsonLevel--;
                    if(!jsonLevel){
                        length=i;
                    }
                    break;
            }
            if (jsonLevel == 0 && startedReading) {
                var substring = json.substring(startPossition, length+1);
                jsonArray.push(JSON.parse(substring));
                startedReading = false;
               // length = 0;
            }
        }
        return jsonArray;
    }
}
