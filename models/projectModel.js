var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  projectname: String,
  contents: String, //설명같은거 들어갈듯....
  xml: String, // 프로젝트 관련 xml 들어갈듯
  owner: String // 프로젝트 소유자
});

module.exports = mongoose.model('project', projectSchema);