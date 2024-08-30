import { useEffect, useState } from "react";
import "./App.css";

const data = [
  {
    categories: {
      HTML: [
        {
          question: "HTML neyin kısaltmasıdır?",
          options: [
            "HyperText Markup Language",
            "Hyper Tool Markup Language",
            "Hyperlink Markup Language",
            "Home Text Markup Language",
          ],
          correctAnswer: "HyperText Markup Language",
        },
        {
          question: "Bir HTML belgesinde başlıklar hangi etiketle tanımlanır?",
          options: ["<header>", "<title>", "<h1> - <h6>", "<head>"],
          correctAnswer: "<h1> - <h6>",
        },
        {
          question:
            "Bir HTML dosyasının hangi bölümü, tarayıcıda görüntülenmez?",
          options: ["<body>", "<head>", "<footer>", "<div>"],
          correctAnswer: "<head>",
        },
        {
          question: "HTML'de en büyük başlık etiketi hangisidir?",
          options: ["<h1>", "<h3>", "<h5>", "<h6>"],
          correctAnswer: "<h1>",
        },
        {
          question: "<a> etiketi ne için kullanılır?",
          options: [
            "Görsel eklemek",
            "Paragraf oluşturmak",
            "Bağlantı vermek",
            "Liste oluşturmak",
          ],
          correctAnswer: "Bağlantı vermek",
        },
        {
          question:
            "Bir HTML etiketinde hangi öznitelik (attribute) kullanılmaz?",
          options: ["id", "class", "src", "link"],
          correctAnswer: "link",
        },
        {
          question: "HTML'de tablo satırı hangi etiketle tanımlanır?",
          options: ["<table>", "<tr>", "<td>", "<th>"],
          correctAnswer: "<tr>",
        },
        {
          question: "HTML'de boşluk bırakmak için hangi karakter kullanılır?",
          options: ["&nbsp;", "&amp;", "&lt;", "&gt;"],
          correctAnswer: "&nbsp;",
        },
        {
          question: "HTML'de sayfa başlığı hangi etiketle belirlenir?",
          options: ["<meta>", "<link>", "<title>", "<script>"],
          correctAnswer: "<title>",
        },
        {
          question: "<br> etiketi ne yapar?",
          options: [
            "Paragraf oluşturur",
            "Satır sonu ekler",
            "Kalın yazı yapar",
            "Liste ekler",
          ],
          correctAnswer: "Satır sonu ekler",
        },
      ],
      CSS: [
        {
          question: "CSS ne için kullanılır?",
          options: [
            "HTML'e stil eklemek için",
            "Veritabanı yönetimi için",
            "Sunucu ile iletişim kurmak için",
            "Veri analizi için",
          ],
          correctAnswer: "HTML'e stil eklemek için",
        },
        {
          question: "CSS'de bir sınıfı seçmek için hangi sembol kullanılır?",
          options: [".", "#", "/", "*"],
          correctAnswer: ".",
        },
        {
          question: "Hangi CSS özelliği bir öğenin arka plan rengini ayarlar?",
          options: ["color", "background-color", "font-color", "border-color"],
          correctAnswer: "background-color",
        },
        {
          question: "CSS'de metin rengi hangi özellik ile değiştirilir?",
          options: ["text-color", "color", "font-color", "background-color"],
          correctAnswer: "color",
        },
        {
          question: "Bir öğeyi gizlemek için hangi CSS özelliği kullanılır?",
          options: [
            "display: none;",
            "visibility: hidden;",
            "opacity: 0;",
            "Tümü",
          ],
          correctAnswer: "Tümü",
        },
        {
          question: "CSS'de kalın yazı stili hangi özellik ile uygulanır?",
          options: ["font-weight", "font-style", "font-family", "font-size"],
          correctAnswer: "font-weight",
        },
        {
          question:
            "Bir öğenin genişliğini ayarlamak için hangi CSS özelliği kullanılır?",
          options: ["width", "height", "margin", "padding"],
          correctAnswer: "width",
        },
        {
          question:
            "CSS'de bir öğenin kenar boşluklarını ayarlamak için hangi özellik kullanılır?",
          options: ["padding", "margin", "border", "spacing"],
          correctAnswer: "margin",
        },
        {
          question:
            "CSS'de bir öğenin kenarlığını ayarlamak için hangi özellik kullanılır?",
          options: ["border", "padding", "margin", "outline"],
          correctAnswer: "border",
        },
        {
          question:
            "CSS'de bir yazı tipini ayarlamak için hangi özellik kullanılır?",
          options: ["font-family", "font-style", "font-weight", "font-size"],
          correctAnswer: "font-family",
        },
      ],
      JavaScript: [
        {
          question: "JavaScript hangi amaçla kullanılır?",
          options: [
            "Web sayfalarına etkileşim eklemek",
            "Veritabanı yönetimi",
            "Sunucu yönetimi",
            "HTML yapılandırması",
          ],
          correctAnswer: "Web sayfalarına etkileşim eklemek",
        },
        {
          question: "JavaScript'te bir değişken nasıl tanımlanır?",
          options: ["var", "let", "const", "Tümü"],
          correctAnswer: "Tümü",
        },
        {
          question: "JavaScript'te hangi sembol eşitlik karşılaştırması yapar?",
          options: ["==", "=", "===", "!="],
          correctAnswer: "===",
        },
        {
          question: "JavaScript'te hangi döngü yapısı yoktur?",
          options: ["for", "while", "foreach", "until"],
          correctAnswer: "until",
        },
        {
          question: "JavaScript'te bir fonksiyon nasıl tanımlanır?",
          options: ["function", "func", "def", "method"],
          correctAnswer: "function",
        },
        {
          question:
            "JavaScript'te bir dizinin (array) ilk elemanına nasıl erişilir?",
          options: ["array[0]", "array[1]", "array.first()", "array.begin()"],
          correctAnswer: "array[0]",
        },
        {
          question: "JavaScript'te `null` nedir?",
          options: [
            "Boş bir değeri temsil eder",
            "Tanımsız bir değeri temsil eder",
            "Bir hata mesajıdır",
            "Bir veri tipi değildir",
          ],
          correctAnswer: "Boş bir değeri temsil eder",
        },
        {
          question: "JavaScript'te bir koşul nasıl kontrol edilir?",
          options: ["if", "while", "for", "switch"],
          correctAnswer: "if",
        },
        {
          question:
            "JavaScript'te hangi fonksiyon, bir metni büyük harfe dönüştürür?",
          options: ["toUpperCase()", "toUpper()", "uppercase()", "toCaps()"],
          correctAnswer: "toUpperCase()",
        },
        {
          question: "JavaScript'te DOM manipülasyonu ne için kullanılır?",
          options: [
            "Web sayfasındaki HTML elemanlarını değiştirmek için",
            "Veritabanı sorguları oluşturmak için",
            "Sunucuya veri göndermek için",
            "CSS stillerini değiştirmek için",
          ],
          correctAnswer: "Web sayfasındaki HTML elemanlarını değiştirmek için",
        },
      ],
      Erişebilirlik: [
        {
          question: "Erişilebilirlik ne anlama gelir?",
          options: [
            "Herkesin bir web sitesini kullanabilmesi",
            "Yalnızca görme engellilerin kullanabilmesi",
            "Mobil cihazlarla uyumlu olması",
            "İnternet bağlantısı gerektirmemesi",
          ],
          correctAnswer: "Herkesin bir web sitesini kullanabilmesi",
        },
        {
          question: "Alt metin (alt text) neden önemlidir?",
          options: [
            "Görsellerin yüklenmesini hızlandırır",
            "Arama motoru optimizasyonunu iyileştirir",
            "Ekran okuyucuların görselleri açıklamasını sağlar",
            "Sayfa yükleme süresini azaltır",
          ],
          correctAnswer: "Ekran okuyucuların görselleri açıklamasını sağlar",
        },
        {
          question:
            "Form etiketlerinde erişilebilirlik için hangi öznitelik kullanılmalıdır?",
          options: ["alt", "for", "name", "id"],
          correctAnswer: "for",
        },
        {
          question: "Başlıklar (headings) neden önemlidir?",
          options: [
            "Sayfa yapısını belirler",
            "Metin boyutunu ayarlar",
            "Sayfa yükleme süresini artırır",
            "Görselleri tanımlar",
          ],
          correctAnswer: "Sayfa yapısını belirler",
        },
        {
          question:
            "Web içeriklerinin erişilebilirliği için hangi kısaltma kullanılır?",
          options: ["WCAG", "W3C", "HTML", "CSS"],
          correctAnswer: "WCAG",
        },
        {
          question: "Klavyeyle gezinme ne anlama gelir?",
          options: [
            "Sadece klavye ile web sayfasında dolaşabilme",
            "Fare kullanarak web sayfasında gezinme",
            "Mobil cihazlarla uyumlu olma",
            "Sayfa yükleme süresini iyileştirme",
          ],
          correctAnswer: "Sadece klavye ile web sayfasında dolaşabilme",
        },
        {
          question: "Bir web sayfasında renk kontrastı neden önemlidir?",
          options: [
            "Metinlerin okunabilirliğini artırır",
            "Sayfa yükleme hızını artırır",
            "Mobil uyumluluğu iyileştirir",
            "SEO'yu optimize eder",
          ],
          correctAnswer: "Metinlerin okunabilirliğini artırır",
        },
        {
          question:
            "Bir web sayfasının 'skip to content' bağlantısı ne için kullanılır?",
          options: [
            "Ana içeriğe hızlıca erişim sağlar",
            "Sayfayı yeniler",
            "Tarayıcı penceresini kapatır",
            "İçeriği kaydeder",
          ],
          correctAnswer: "Ana içeriğe hızlıca erişim sağlar",
        },
        {
          question: "Ekran okuyucular için en iyi uygulama nedir?",
          options: [
            "Anlamlı alt metinler kullanmak",
            "Yüksek çözünürlüklü görseller eklemek",
            "Animasyonları artırmak",
            "Düşük kontrastlı renkler kullanmak",
          ],
          correctAnswer: "Anlamlı alt metinler kullanmak",
        },
        {
          question: "Formlar neden etiketlerle birlikte kullanılmalıdır?",
          options: [
            "Erişilebilirlik sağlar",
            "Sayfa hızını artırır",
            "Görselleri optimize eder",
            "Mobil cihaz uyumluluğunu artırır",
          ],
          correctAnswer: "Erişilebilirlik sağlar",
        },
      ],
    },
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [theme, setTeheme] = useState("Light");

  function handleToggle() {
    setIsChecked(!isChecked);
    setTeheme(isChecked ? "Light" : "dark");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className="container">
        <Header
          handleToggle={handleToggle}
          selectedCategory={selectedCategory}
        />
        {selectedCategory ? (
          <Question selectedCategory={selectedCategory} />
        ) : (
          <StartMenu setSelectedCategory={setSelectedCategory} />
        )}
      </div>
    </>
  );
}

function Header({ selectedCategory, handleToggle }) {
  return (
    <div className="header">
      <div className="categoriesTitle">
        <h2>{selectedCategory}</h2>
      </div>
      <div className="mod">
        <Toggle handleToggle={handleToggle} />
      </div>
    </div>
  );
}

function Toggle({ handleToggle, isChecked }) {
  //theme ayarlıyoruz
  return (
    <div className="toggle">
      <img src="./img/sunny.svg" />
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} checked={isChecked} />
        <span className="slider round"></span>
      </label>
      <img src="./img/moon.svg" />
    </div>
  );
}

function StartMenu({ setSelectedCategory }) {
  const categories = [
    { name: "HTML", img: "./img/html.svg" },
    { name: "CSS", img: "./img/css.svg" },
    { name: "JavaScript", img: "./img/js.svg" },
    { name: "Erişebilirlik", img: "./img/acces.svg" },
  ];

  return (
    <div className="categorieSection">
      <div className="text">
        <h2>
          Hoşgeldiniz <strong>Frontend Testine!</strong>
          <span>Başlamak için bir konu seçin.</span>
        </h2>
      </div>
      <div className="categories">
        {categories.map((category, index) => (
          <button
            className="btnOption"
            key={index}
            onClick={() => setSelectedCategory(category.name)}
          >
            <img src={category.img} alt={`${category.name} icon`} />
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function Question({ selectedCategory }) {
  const questions = data[0].categories[selectedCategory];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];
  const optionLetters = ["A", "B", "C", "D"];
  const [count, setCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  function quesCount() {
    setQuestionCount((x) => x + 1);
  }

  function scoreCount() {
    if (selectedOption === currentQuestion.correctAnswer) {
      setCount((x) => x + 1);
    }
  }

  function handleOptionClick(selected) {
    setSelectedOption(selected);
  }

  function handleSubmitAnswer() {
    quesCount();
    scoreCount();
    setShowAnswer(true);
  }

  function handleNextQuestion() {
    setSelectedOption("");
    setShowAnswer(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
    } else {
      setIsCompleted(true); // son soruda tamamlandı
    }
  }

  if (isCompleted) {
    return <LastPage count={count} selectedCategory={selectedCategory} />; // Eğer tüm sorular tamamlandıysa LastPage bileşenini göster
  }

  return (
    <>
      <div className="questionSection">
        <div className="current-question">Soru {questionCount}/10</div>
        <div className="questionBox">
          <div className="question">
            <h3>{currentQuestion.question}</h3>
            <div className="score"> skor : {count}</div>
          </div>
          <div className="options">
            {currentQuestion.options.map((option, i) => {
              const optionClass =
                showAnswer && option === currentQuestion.correctAnswer
                  ? "correct"
                  : showAnswer && option === selectedOption
                  ? "incorrect"
                  : "";

              return (
                <button
                  key={i}
                  onClick={() => {
                    handleOptionClick(option);
                    scoreCount();
                  }}
                  className={`btnOption ${
                    selectedOption === option ? "selected" : ""
                  } ${optionClass}`}
                  disabled={showAnswer}
                >
                  <p className="harf">{optionLetters[i]}</p>
                  <span className="optionText">{option}</span>
                </button>
              );
            })}
            {showAnswer && (
              <div className="answer">
                {selectedOption === currentQuestion.correctAnswer
                  ? console.log("Doğru!")
                  : console.log("Yanlış!")}
              </div>
            )}
            {!showAnswer && (
              <button
                type="submit"
                className="submitBtn"
                onClick={handleSubmitAnswer}
                disabled={!selectedOption} // Seçim yapılmadıysa buton disabled
              >
                Cevabı Gönder
              </button>
            )}
            {showAnswer && currentQuestionIndex < questions.length - 1 && (
              <button
                type="submit"
                className="submitBtn"
                onClick={handleNextQuestion}
              >
                Sıradaki soru
              </button>
            )}
            {showAnswer && currentQuestionIndex === questions.length - 1 && (
              <button
                type="submit"
                className="submitBtn"
                onClick={handleNextQuestion}
              >
                Testi Bitir
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// function handleStartPage() {
  
// }

function LastPage({ count, selectedCategory }) {
  return (
    <div className="scoreBox">
      <div className="scoreText">
        <h3>Test tamamlandı</h3>
        <strong>Skorunuz...</strong>
      </div>
      <div className="scorePage">
        <h3>{selectedCategory}</h3>
        <strong>{count}</strong>
        <p>10 üzerinden</p>
        <button onClick={() => handleStartPage()} className="scoreBtn ">
          Tekrar Oyna
        </button>
      </div>
    </div>
  );
}
