"use client";

import React, { useState } from 'react';

export default function Home() {
  const [scores, setScores] = useState({});

  const sections = [
    {
      title: "A. 문제 인식 및 분석 능력",
      questions: [
        {
          text: "자녀가 학교에서 친구와 다툼이 있었다고 할 때, 즉시 상황을 구체적으로 파악하려 노력한다",
          example: "예시: \"그래서 무슨 일이 있었는지 자세히 이야기해줄 수 있어?\""
        },
        {
          text: "아이의 학업 성적이 갑자기 떨어졌을 때, 감정적 반응 전에 원인을 객관적으로 분석한다",
          example: "예시: 수면시간, 학습환경 변화, 건강상태 등을 체크한다"
        },
        {
          text: "이사나 전학과 같은 큰 변화 앞에서 처리할 일의 우선순위를 명확히 정한다",
          example: "예시: 체크리스트 작성, 중요도-시급성 매트릭스 활용"
        },
        {
          text: "자녀의 진로 고민에 대해 관련 정보를 체계적으로 수집한다",
          example: "예시: 진로상담 자료 수집, 현직자 인터뷰 찾아보기"
        },
        {
          text: "비슷한 문제를 해결했던 경험을 참고하여 해결책을 찾는다",
          example: "예시: 이전에 극복했던 학습 부진 해결 방법 활용"
        }
      ]
    },
    {
      title: "B. 해결방안 도출 및 실행력",
      questions: [
        {
          text: "자녀가 스마트폰 사용시간 조절에 어려움을 겪을 때, 다양한 해결방안을 함께 브레인스토밍한다",
          example: "예시: 타이머 설정, 보상 시스템, 대체 활동 찾기 등"
        },
        {
          text: "학원 선택 시 비용, 거리, 교육 효과 등 여러 요소를 구체적으로 비교분석한다",
          example: "예시: 엑셀로 장단점 비교표 작성"
        },
        {
          text: "방학 계획을 세울 때 구체적인 실행 일정과 방법을 정한다",
          example: "예시: 주간 계획표 작성, 체크포인트 설정"
        },
        {
          text: "학습 계획에 차질이 생길 경우를 대비한 대안을 미리 준비한다",
          example: "예시: 자습 시간 확보, 온라인 강의 백업"
        },
        {
          text: "정기적으로 계획 실행 상황을 점검하고 필요시 수정한다",
          example: "예시: 주간 가족 회의로 진행상황 체크"
        }
      ]
    },
    {
      title: "C. 자녀와의 상호작용",
      questions: [
        {
          text: "자녀가 친구관계 고민을 털어놓을 때 비판 없이 경청한다",
          example: "예시: \"그랬을 때 네 마음이 어땠어?\""
        },
        {
          text: "성적표를 받아왔을 때 결과보다 과정에 대해 구체적으로 물어본다",
          example: "예시: \"이번에 시도해본 학습방법 중 효과적이었던 건 뭐였어?\""
        },
        {
          text: "진로 선택 시 자녀의 의견을 먼저 충분히 듣는다",
          example: "예시: \"넌 어떤 직업이 재미있어 보이니?\""
        },
        {
          text: "비슷한 어려움을 겪었던 나의 경험을 구체적으로 공유한다",
          example: "예시: 시험 실패 경험과 극복 과정 공유"
        },
        {
          text: "문제 해결 과정에서 직접 답을 주지 않고 생각할 단서를 제공한다",
          example: "예시: \"그 상황에서 다른 방법은 없었을까?\""
        }
      ]
    },
    {
      title: "D. 문제해결 태도 모델링",
      questions: [
        {
          text: "업무나 가정사의 어려움 속에서도 긍정적 태도를 보여준다",
          example: "예시: \"어렵지만 이것도 좋은 경험이 될 거야\""
        },
        {
          text: "실수했을 때 회피하지 않고 수습하는 모습을 보여준다",
          example: "예시: 요리 실패 시 다시 시도하는 모습 보여주기"
        },
        {
          text: "일상적 문제해결 과정을 소리 내어 설명한다",
          example: "예시: 가전제품 고장 시 해결과정 설명하기"
        },
        {
          text: "필요할 때 주변에 도움을 요청하는 모습을 보여준다",
          example: "예시: 이웃이나 전문가에게 조언 구하기"
        },
        {
          text: "문제가 해결된 후 배운 점을 가족과 나눈다",
          example: "예시: 저녁 식사 시간에 오늘의 교훈 나누기"
        }
      ]
    }
  ];

  const handleScore = (sectionIndex: number, questionIndex: number, score: number) => {
    setScores({
      ...scores,
      [`${sectionIndex}-${questionIndex}`]: score
    });
  };

  const calculateSectionScore = (sectionIndex: number) => {
    let total = 0;
    const sectionQuestions = sections[sectionIndex].questions;
    for (let i = 0; i < sectionQuestions.length; i++) {
      total += scores[`${sectionIndex}-${i}`] || 0;
    }
    return total;
  };

  const getImprovement = (score: number) => {
    if (score < 8) return "집중 개선 필요";
    if (score < 12) return "부분 개선 필요";
    return "양호";
  };
return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">부모의 문제해결력 자가진단 체크리스트</h1>
      
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8 border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">{section.title}</h2>
          
          {section.questions.map((question, questionIndex) => (
            <div key={questionIndex} className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="mb-2 font-medium">{question.text}</p>
              <p className="text-sm text-gray-600 mb-3 italic">{question.example}</p>
              
              <div className="flex gap-4">
                {[1, 2, 3].map((score) => (
                  <label key={score} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={`${sectionIndex}-${questionIndex}`}
                      value={score}
                      onChange={() => handleScore(sectionIndex, questionIndex, score)}
                      className="w-4 h-4"
                    />
                    <span>{score}점</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="font-medium">섹션 점수: {calculateSectionScore(sectionIndex)}/15점</p>
            <p className="text-sm text-blue-600">상태: {getImprovement(calculateSectionScore(sectionIndex))}</p>
          </div>
        </div>
      ))}

      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-bold mb-4">실천 가이드</h3>
        <div className="space-y-4">
          {sections.map((section, index) => {
            const score = calculateSectionScore(index);
            if (score < 12) {
              return (
                <div key={index} className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-red-600">{section.title}</h4>
                  <ul className="list-disc ml-5 mt-2">
                    <li>매일 저녁 시간을 정해 이 영역의 문제해결 연습하기</li>
                    <li>관련 전문가의 조언 구하기</li>
                    <li>가족과 함께 개선 계획 세우기</li>
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </main>
  );
}
