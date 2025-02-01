interface TwoTextsProps{
    text1 : String,
    text2 : String
}

function TwoTexts({text1, text2}:TwoTextsProps) {
    return (
      <div className="bg-gradient-to-b from-white via-gray-50 to-white py-16 px-8 lg:px-24 flex flex-col items-center text-start">
        <h2 className="text-blue-500 text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {text1}
        </h2>
        <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-4xl leading-relaxed">
          {text2}
        </p>
      </div>
    );
  }
  
  export default TwoTexts;
  