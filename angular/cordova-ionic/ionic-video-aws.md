http://stackoverflow.com/questions/38694542/ionic-upload-video-to-s3a

```js
var uploadFile = function (file_name,file_path) {
            var deferred = $q.defer();
            $cordovaFile.readAsArrayBuffer(file_name,file_path)
                .then(function (success) {
                    AWS.config.region = 'eu-west-1';
                    AWS.config.update({
                        accessKeyId: 'ACCESS-KEY',
                      secretAccessKey:'SECRET-KEY'
                    });
                    var bucket = new AWS.S3({
                        params: {
                            Bucket: 'Bucket-NAME'
                        }
                    });
                    var params = {
                        Key: "uploads/"+file_name,
                        Body: success
                    };

                    bucket.upload(params).on('httpUploadProgress',function(evt){
                        $scope.uploading = true;
                        $scope.progress = parseInt((evt.loaded*100)/ evt.total);
                        console.log("Uploaded :: " + $scope.progress);
                        $scope.$apply();
                    }).send(function (err, data) {
                        $scope.uploading = false;
                        $scope.$apply();
                        deferred.resolve(data);

                    });
                    $scope.i++;

                }, function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

```

https://devdactic.com/capture-and-store-videos-ionic/
http://blog.ionic.io/oauth-ionic-ngcordova/
